USE commerce;
ALTER TABLE rumeur
ADD CONSTRAINT FK_CategorieRumeur
FOREIGN KEY (idZone) REFERENCES categorie(id);