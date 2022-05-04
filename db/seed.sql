USE event_db;

INSERT INTO User
    (name, email, password, address, phoneNumber, birthday)
VALUES
    ('Simona Knights', 'Nattena2002@yahoo.com', 'Maddox1213', '16698 Lantana Dr, Harlingen, TX 78552', '(254)247-7544', 12/13/1974),
    ('Napoloen Maddox', 'NapoleonMaddox@gmail.com', 'Maddox0813', '9 Rue Du Lycee, 25000 Besancon, France', '(513)226-4111', 08/13/1972),
    ('Omega Rousell', 'Mgmddx@gmail.com', 'Maddox0202', '611 Waycross Road, Cincinnati, Ohio 45225', '(513)818-7751', 02/02/1998),
    ('David Thaxton', 'Mufaro96@aol.com', 'Maddox0920', '96 Burghardt St, Springfield, MA 01104', '(413)736-5040', 09/20/1966);

INSERT INTO Event
    (name, description, event_start, event_end, location, cost, attendees, link)
VALUES
    ('Maddox Family Reunion', 'Family Reunion', 07/09/2022, 07/12/2022, 'Springfield, MA', 45.00, 'Simona Knights', 'https://www.facebook.com/groups/1069484670503639');

INSERT INTO Comment
    (content, date_created)
VALUES
    ('looking forward to seeing everyone in July', 05/04/2022),
    ('Can not wait to fly home from France for the Reunion', 05/05/2022);