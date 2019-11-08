export class Materiel {

    // Déclaration des attributs
    private nom: string;
    private prix: number;
    private reference :string;
    private image :string;
    private repare:string;
    // Définition du constructeur
    constructor(val1: string, val2: number,val3:string,val4:string,val5:string)
    {
    this.nom = val1;
    this.prix = val2;
    this.reference=val3;
    this.image=val4;
    this.repare=val5;
    }
   }
   
   
   