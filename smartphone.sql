CREATE TABLE Smartphone
(
    serial_num SERIAL,
    brand CHARACTER VARYING(30),
    ozu INTEGER,
    PRIMARY KEY(serial_num)
);

insert into smartphone (brand, ozu) values ('xiaomi', 4)