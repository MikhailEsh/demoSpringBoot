create table if not exists algorithms
(
	namealgo char(255),
	favorite boolean,
	countrun integer
)
;

alter table algorithms owner to postgres
;

INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Painting the Tape', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Pump&Dump', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Trash&Cash', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Marking the close   ', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Improperly matched orders     ', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Spoofing', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Layering', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Quote Stuffing', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Inter-trading venue manipulation', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Cross-contract manipulation', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Momentum ignition', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Wash Deals', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Concealing the Ownership', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Pinging', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Advancing the bid', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('N-minute Loss', false);
INSERT INTO public.algorithms (namealgo, favorite) VALUES ('Off-market deals', false);
