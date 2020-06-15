
### Como rodar este projeto ?

**1 - Instalando dependências**
```bash
$~ yarn | npm install
```
**2 - Depois você pode iniciar.**
```bash
$~ yarn dev
```

### Rotas 

### Sobre API - Métodos HTTP
- GET - Buscar Informações do Back-end
- POST - Cadastrar Informações no Back-end
- PUT/PATCH - Atualizar Informações no Back-end
  - PUT - Atualizar vários dados de uma vez.
  - PATCH - Atualizar um dado em específico
- DELETE - Deletar Informações no Back-end

### Sobre API - Tipos de Parâmetros
- Query Paramas - Filtros e Paginação 
  - Ex: api.com/?page=2&name=Mateus 
- Route Params - Utilizado para selecionar um abjeto específico
- Request Body - 