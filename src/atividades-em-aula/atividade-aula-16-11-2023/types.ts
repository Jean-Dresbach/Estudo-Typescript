export class Turma {
    constructor(
        private id: string, 
        private edicao: number, 
        private programa: string,
        private alunos: Aluno[] = []
    ) { }

    public listarAlunos(): void {
        this.alunos.forEach(aluno => console.log(`Id: ${aluno.id} | Turma: ${aluno.turma.edicao}a edição do Programa ${aluno.turma.programa} | Nome: ${aluno.nome} | Idade: ${aluno.idade} anos`))
    }

    public adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno)
        console.log("Aluno adicionado com sucesso!")
    }
}

export class Aluno {
    constructor(
        private _id: string, 
        private _nome: string, 
        private _idade: number,
        private _turma: Turma,
        private _skills: Skill[] = []
    ) { }

    public get id() : string {
        return this._id
    }

    public get nome() : string {
        return this._nome
    }

    public get idade() : number {
        return this._idade
    }

    public get turma() : Turma {
        return this._turma
    }
    
    public listarSkills(): void {
        this._skills.forEach(skill => console.log(`Id: ${skill.id} | Descrição: ${skill.descricao} | Ativo: ${skill.ativo}`))
    }   

    public adicionarSkill(skill: Skill): void {
        this._skills.push(skill)
        console.log("Skill adicionada com sucesso!")
    }
}

export class Skill {
    constructor(
        private _id: string,
        private _descricao: string,
        private _ativo: boolean
    ) {}

    public get id() : string {
        return this._id
    }
    public get descricao() : string {
        return this._descricao
    }
    public get ativo() : boolean {
        return this._ativo
    }
}