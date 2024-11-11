create table if not exists polyclinics
(
    id          serial primary key not null,
    name        varchar(20) unique not null,
    slug        varchar(20)        not null,
    description varchar(100)       not null,
    is_active   boolean            not null default true,
    created_at  timestamp          not null default current_timestamp,
    updated_at  timestamp
)