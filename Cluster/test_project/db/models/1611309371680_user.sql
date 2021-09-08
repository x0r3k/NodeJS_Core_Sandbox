create table if not exists test_db.users (
  id int auto_increment,
  name varchar(50) not null,
  gender enum('m', 'f', 'nb') not null,
  constraint users_pk primary key (id)
);