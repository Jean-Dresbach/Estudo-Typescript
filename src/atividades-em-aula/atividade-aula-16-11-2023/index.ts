import { Aluno, Turma, Skill } from "./types"

const turma1 = new Turma("1a", 16, "Starter Full Stack Web Developer");
const skill1 = new Skill("Programação Full Stack", "Habilita a codar tanto em front como em back end", true)
const aluno1 = new Aluno("1a", "Jean", 21, turma1)
const aluno2 = new Aluno("1b", "Alex", 31, turma1)
const aluno3 = new Aluno("1c", "Diogo", 31, turma1)

turma1.adicionarAluno(aluno1)
turma1.adicionarAluno(aluno2)
turma1.adicionarAluno(aluno3)

turma1.listarAlunos()

aluno1.adicionarSkill(skill1)
aluno2.adicionarSkill(skill1)
aluno3.adicionarSkill(skill1)

aluno1.listarSkills()
aluno2.listarSkills()
aluno3.listarSkills()