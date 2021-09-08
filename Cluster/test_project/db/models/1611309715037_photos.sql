create table if not exists test_db.photos (
  id int auto_increment primary key,
  title text not null,
  fk_user int not null,
  constraint fk_user_id foreign key (fk_user) references users(id)
);