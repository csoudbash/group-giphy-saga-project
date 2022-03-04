create table category (
	id serial primary key,
	name varchar(100)
);
create table favorites (
id serial primary key, 
url varchar(1000) not null,
category_id INT references category
);

INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

insert into favorites ("url","category_id")
values ('lame','2')