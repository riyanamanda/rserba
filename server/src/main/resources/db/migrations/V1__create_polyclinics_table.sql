create table if not exists polyclinics
(
    id          serial,
    name        varchar(20) unique not null,
    slug        varchar(20)        not null,
    description varchar(100)       not null,
    is_active   bool                        default true,
    created_at  timestamp          not null default current_timestamp,
    updated_at  timestamp,

    primary key (id)
)