const searchEmployee = require('../src/exercise-bonus');

describe('Testa se a função searchEmployee', () => {
  it('foi definida', () => {
    expect(searchEmployee).toBeDefined()
  })
  it('é uma função', () => {
    expect(typeof searchEmployee).toBe('function')
  })
  it('lança um erro caso o id não existir', () => {
    expect(() => { searchEmployee('9999', 'firstName') }).toThrow();
  })
  it('lança um erro com a mensagem "ID não identificada" caso o id não existir', () => {
    expect(() => { searchEmployee('9999', 'firstName') }).toThrowError(new Error('ID não identificada'));
  })
  it('lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('lança um erro com a mensagem "Informação indisponível" se a informação que se quer acessar não existir', () => {
    expect(() => { searchEmployee('8579-6', 'age') }).toThrowError(new Error('Informação indisponível'));
  })
  it('retorna o nome "Ana" quando receber os parâmetros (8579-6, firstName)', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana')
  })
  it('retorna o sobrenome "Jobs" quando receber os parâmetros (5569-4, lastName)', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs')
  })
  it('retorna as especialidades "[Context API, RTL, Bootstrap]" quando receber os parâmetros (4456-4, specialities)', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap'])
  })
})