create table if not exists doctors
(
    id         bigserial primary key not null,
    name       varchar(20) unique not null,
    image_url  text,
    is_active  boolean            not null default true,
    created_at timestamp          not null default current_timestamp,
    updated_at timestamp
)