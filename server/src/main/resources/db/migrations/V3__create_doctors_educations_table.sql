CREATE TABLE IF NOT EXISTS doctors_educations
(
    doctor_id    INT NOT NULL,
    education_id INT NOT NULL,
    CONSTRAINT fk_doctors FOREIGN KEY (doctor_id) REFERENCES doctors (id),
    CONSTRAINT fk_educations FOREIGN KEY (education_id) REFERENCES educations (id)
);