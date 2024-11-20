CREATE TABLE IF NOT EXISTS doctors
(
    id         BIGSERIAL PRIMARY KEY               NOT NULL,
    name       VARCHAR(50)                         NOT NULL,
    image_url  TEXT,
    is_active  BOOLEAN   DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
)