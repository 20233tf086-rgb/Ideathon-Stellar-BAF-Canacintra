# Organización del ideathon

Material del equipo que imparte el programa. Lo que ven los participantes está en la raíz del repo.

| Documento | Para qué |
|---|---|
| [temario.md](temario.md) | Plan de trabajo: agenda, contenidos por bloque, evaluación e indicadores. **Es el documento que se presenta a BAF y a CANACINTRA.** |
| [metricas.md](metricas.md) | Qué se mide, cómo se calcula cada indicador y con qué comando |
| [logistica.md](logistica.md) | Checklist T-2 semanas, T-72 h, día del evento y contingencias |
| [guia-facilitador.md](guia-facilitador.md) | Cómo correr la jornada: tiempos internos, errores frecuentes, guion de revisión |
| [scripts/metricas.sh](scripts/metricas.sh) | Reporte de participación y leaderboard, desde el historial del repo |

La versión presentable del temario es [`../plan-de-trabajo.html`](../plan-de-trabajo.html), publicada en
[marxmad.github.io/Ideathon-Stellar-BAF-Canacintra/plan-de-trabajo.html](https://marxmad.github.io/Ideathon-Stellar-BAF-Canacintra/plan-de-trabajo.html).

---

## El día del evento

```bash
# leaderboard para proyectar
./organizacion/scripts/metricas.sh MarxMad/Ideathon-Stellar-BAF-Canacintra --leaderboard

# reporte completo de indicadores
./organizacion/scripts/metricas.sh MarxMad/Ideathon-Stellar-BAF-Canacintra
```

Requiere [GitHub CLI](https://cli.github.com) autenticado (`gh auth login`).

---

## Cómo se configuró este repo

Por si hay que montar una edición nueva desde cero:

```bash
gh repo create <ORG>/<NOMBRE> --public --source=. --push \
  --description "Ideathon Stellar × BAF × CANACINTRA — ideas, demos y entregables de los equipos"

# Solo merge commits: preserva la autoría individual de cada participante.
# Si se permite squash, los commits del equipo se colapsan en uno y se
# atribuyen a quien integra, que es justo lo que se está midiendo.
gh api -X PATCH "repos/<ORG>/<NOMBRE>" \
  -F allow_merge_commit=true -F allow_squash_merge=false -F allow_rebase_merge=false \
  -F has_issues=true -F has_projects=false -F has_wiki=false

# GitHub Pages desde main: aquí se sirven las demos ya integradas
gh api -X POST "repos/<ORG>/<NOMBRE>/pages" -f 'source[branch]=main' -f 'source[path]=/'
```

Ese último comando falla si el repo acaba de crearse y todavía se está inicializando; reintentar a los pocos segundos.

---

## Antes de cada edición

- [ ] Recorrer el flujo completo **con una cuenta de GitHub ajena**: fork → contribución → copiar la plantilla de demo → activar Pages → abrir Pull Request. Con la cuenta propia no se ven las fricciones que sí encuentra un participante.
- [ ] Verificar que la demo de ejemplo carga y se ve bien **en un celular**.
- [ ] Vaciar `ideas/` de la edición anterior, o archivarla en una rama.
- [ ] Actualizar fechas y nombre de la sede en el temario.

---

## Material técnico de apoyo

El catálogo de casos de uso, los contratos de referencia y las guías de laboratorio viven en
**[CriptoUNAM-Team/Stellar-Guide](https://github.com/CriptoUNAM-Team/Stellar-Guide)**, que es el repo docente.
Este repo solo enlaza a él; no lo duplica.
