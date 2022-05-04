USE event_db;

INSERT INTO User
    (name, email, password, address, phone_number, birthday)
VALUES
    ('Simona Knights', 'Nattena2002@yahoo.com', 'Maddox1213', '16698 Lantana Dr, Harlingen, TX 78552', '(254)247-7544', '1974-12-13'),
    ('Napoloen Maddox', 'NapoleonMaddox@gmail.com', 'Maddox0813', '9 Rue Du Lycee, 25000 Besancon, France', '(513)226-4111', '1972-08-03'),
    ('Omega Rousell', 'Mgmddx@gmail.com', 'Maddox0202', '611 Waycross Road, Cincinnati, Ohio 45225', '(513)818-7751', '1998-02-02'),
    ('David Thaxton', 'Mufaro96@aol.com', 'Maddox0920', '96 Burghardt St, Springfield, MA 01104', '(413)736-5040', '1966-09-20');

INSERT INTO Event
    (name, description, event_start, event_end, location, cost, attendees, link)
VALUES
    ('Maddox Family Reunion', 'Family Reunion', '2022-07-09', '2022-07-12', 'Springfield, MA', 45.00, 'Simona Knights', 'https://www.facebook.com/groups/1069484670503639');

INSERT INTO comments
    (commenter_id, content)
VALUES
    (12, 'looking forward to seeing everyone in July'),
    (13, 'Can not wait to fly home from France for the Reunion');