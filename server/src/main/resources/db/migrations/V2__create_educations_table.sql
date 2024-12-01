CREATE TABLE IF NOT EXISTS educations
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(100)                        NOT NULL,
    year       INT                                 NOT NULL,
    title      VARCHAR(10)                         NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);