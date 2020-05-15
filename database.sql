CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Favorites table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (255) NOT NULL,
    "category_id" INT);
    
-- test data
INSERT INTO "favorites" ("url", "category_id")
VALUES 
('https://giphy.com/embed/dSeVDdzx1kri7GYWJG', 1),
('https://giphy.com/embed/Ut8FZWMUJW0bv9D4yp', 2),
('https://giphy.com/embed/RK4DLCLQqOU0yALMf9', 3),
('https://giphy.com/embed/jxLYbRQK4CePHmgpHS', 4),
('https://giphy.com/embed/A9lgUYVqLeRb2', 5);

-- query to get all favorites with the category 'cartoon'
SELECT url, name 
FROM favorites 
JOIN category ON favorites.category_id = category.id
WHERE "name" = 'cartoon';

-- display al images and their category
SELECT url, name 
FROM favorites 
JOIN category ON favorites.category_id = category.id;
