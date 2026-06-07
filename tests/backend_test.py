import pytest
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)


def test_root_endpoint():
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["message"] == "TrueNorth API"
    assert "endpoints" in data


def test_get_brand_guidelines():
    response = client.get("/api/brand")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 4
    assert data[0]["section"] == "positioning"
    assert data[1]["section"] == "tone"


def test_get_design_tokens():
    response = client.get("/api/tokens")
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0
    assert data[0]["category"] == "color"


def test_get_design_tokens_filtered():
    response = client.get("/api/tokens?category=color")
    assert response.status_code == 200
    data = response.json()
    assert all(t["category"] == "color" for t in data)


def test_submit_contact_form_valid():
    form_data = {
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Test message"
    }
    response = client.post("/api/contact", json=form_data)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True


def test_submit_contact_form_invalid():
    form_data = {
        "name": "",
        "email": "invalid",
        "message": ""
    }
    response = client.post("/api/contact", json=form_data)
    assert response.status_code == 400


def test_get_figma_handoff():
    response = client.get("/api/figma/handoff")
    assert response.status_code == 200
    data = response.json()
    assert "colors" in data
    assert "typography" in data
    assert "spacing" in data
    assert "components" in data


def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
