CREATE TABLE persons (id  integer, create_datetime timestamp, email varchar(255), phone varchar(255), sex varchar(255), username varchar(255), zone text, primary key (id));



INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'gubaoer@hotmail.com', 08613000001111, 'male', 'gubaoer', 'HongKou District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'boyle.gu@hotmail.com', 08613000001112, 'male', 'baoer.gu', 'JingAn District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'yoyo.wu@gmail.com', 08613000001113, 'female', 'yoyo.wu', 'JingAn District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'stacy.gao@126.com', 08613000001114, 'female', 'stacy.gao', 'MinHang District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'yomiko.zhu@qq.com', 08613000001115, 'female', 'yomiko.zhu', 'PuDong District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'hong.zhu@163.com', 08613000001116, 'male', 'hong.zhu', 'YangPu District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'leon.lai@qq.com', 08613000001117, 'male', 'leon.lai', 'JinShan District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'mark.lei@sohu.com', 08613000001118, 'male', 'mark.lei', 'HuangPu District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'wen.liu@360.com', 08613000001119, 'male', 'wen.liu', 'ChongMing District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'cai.lu@baidu.com', 08613000001120, 'female', 'cai.lu', 'BaoShan District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'alex.li@icee.com', 08613000001121, 'male', 'alex.li', 'ChangNing District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'sofia.xu@qq.com', 08613000001122, 'female', 'sofia.xu', 'ZhaBei District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'cora.zhang@qq.com', 08613000001123, 'female', 'cora.zhang', 'XuHui District');

INSERT INTO persons (create_datetime, email, phone, sex, username, zone) VALUES (current_timestamp, 'tom.gao@hotmail.com', 08613000001124, 'female', 'tom.gao', 'HuangPu District');


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


create table testtable(testname varchar(255),testvar varchar(255), primary key (testname));
INSERT INTO testtable (testname,testvar) VALUES ('test 1', '1-st test');
INSERT INTO testtable (testname,testvar) VALUES ('test 2', '1-nd test');
INSERT INTO testtable (testname,testvar) VALUES ('test 3', '3-rd test');