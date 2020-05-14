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





-- CREATE TABLE "pictures" (
--     "id" SERIAL PRIMARY KEY, 
--     "url" VARCHAR (200)
-- )

-- Favorites table
CREATE TABLE "favorites" (
    "id" VARCHAR (50) PRIMARY KEY,
    "embed_url" VARCHAR (255) NOT NULL,
    "title" VARCHAR (255) NOT NULL,
    "category_id" INT);
    
-- test data
INSERT INTO "favorites" ("id", "embed_url", "title", "category_id")
VALUES 
('dSeVDdzx1kri7GYWJG', 'https://giphy.com/embed/dSeVDdzx1kri7GYWJG', 'Leave Me Alone Crying GIF by Leroy Patterson', 1),
('Ut8FZWMUJW0bv9D4yp', 'https://giphy.com/embed/Ut8FZWMUJW0bv9D4yp', 'Happy Love You GIF by pikaole', 2),
('RK4DLCLQqOU0yALMf9', 'https://giphy.com/embed/RK4DLCLQqOU0yALMf9', 'Jordan Facepalm GIF by The Challenge', 3),
('jxLYbRQK4CePHmgpHS', 'https://giphy.com/embed/jxLYbRQK4CePHmgpHS', 'Oh No Omg GIF by Mike Shinoda', 4),
('A9lgUYVqLeRb2', 'https://giphy.com/embed/A9lgUYVqLeRb2', 'A Whole New World Cat GIF by Cindy Suen', 5)
;

-- query to get all favorites with the category 'cartoon'
SELECT favorites.id, embed_url, title 
FROM favorites 
JOIN category ON favorites.category_id = category.id
WHERE "name" = 'cartoon';
