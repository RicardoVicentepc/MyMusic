create database MyMusic;
USE MyMusic;

-- -----------------------------------------------------
CREATE TABLE pessoa(
  idPessoa INT PRIMARY KEY  AUTO_INCREMENT,
  nome VARCHAR(45),
  sobreNome VARCHAR(45),
  email VARCHAR(45),
  senha VARCHAR(45),
  dtCadastro DATE);

-- -----------------------------------------------------

CREATE TABLE messagem(
  idMensagem INT NOT NULL AUTO_INCREMENT,
  mensagem VARCHAR(45),
  fk_pessoa INT NOT NULL,
  PRIMARY KEY (idMensagem, fk_pessoa),
  INDEX fk_messagem_pessoa1_idx (fk_pessoa ASC) VISIBLE,
  CONSTRAINT fk_messagem_pessoa1
    FOREIGN KEY (fk_pessoa) REFERENCES pessoa (idPessoa)
);

-- -----------------------------------------------------
CREATE TABLE tbmusica(
  idMusica INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nomeMusica VARCHAR(45),
  genero VARCHAR(45)
  );


-- ------------------------------------------------------- -----------------------------------------------------
CREATE TABLE recomendacao(
  idRecomendacao INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fkPessoa INT,
  fkMusica INT NOT NULL,
  email VARCHAR(45),
  descricao VARCHAR(45),
  CONSTRAINT fk_Recomendacao_Pessoa1 FOREIGN KEY (fkPessoa) REFERENCES pessoa (idPessoa),
  CONSTRAINT fk_Recomendacao_tbMusica1 FOREIGN KEY (fkMusica) REFERENCES tbmusica (idMusica));

-- ------------------------------------------------------- -----------------------------------------------------
CREATE TABLE tbartista(
  idArtista INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nomeArtista VARCHAR(45));

-- ------------------------------------------------------- -----------------------------------------------------
CREATE TABLE tbalbum(
  idtbAlbum INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nomeAlbum VARCHAR(45),
  tbMusica_idMusica INT NOT NULL,
  tbArtista_idArtista INT NOT NULL,
  CONSTRAINT fk_tbAlbum_tbArtista1 FOREIGN KEY (tbArtista_idArtista) REFERENCES tbartista (idArtista),
  CONSTRAINT fk_tbAlbum_tbMusica1 FOREIGN KEY (tbMusica_idMusica) REFERENCES tbmusica (idMusica)
  );

create user 'usuario'@'localhost' identified by '123';
grant all privileges on mymusic.* to 'usuario'@'localhost';
flush privileges;