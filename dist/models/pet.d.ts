export type Pet = {
    type: "dog" | "cat" | "fish";
    image: string;
    name: string;
    color: string;
    sex: "Masculino" | "Feminino";
};
export declare const Pet: {
    getAll: () => Pet[];
    getFromType: (type: "dog" | "cat" | "fish") => Pet[];
    getFromName: (name: string) => Pet[];
};
//# sourceMappingURL=pet.d.ts.map