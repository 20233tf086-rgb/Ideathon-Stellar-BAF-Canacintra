# Logística — checklist previo y del día

## T-2 semanas

- [ ] Crear el repo del ideathon (ver [cómo se configuró el repo](README.md#cómo-se-configuró-este-repo)) y **recorrerlo con una cuenta de GitHub nueva**: fork → subir `lean-canvas.md` → abrir Pull Request.
- [ ] Configurar el repo: Settings → General → Pull Requests → dejar habilitado **solo *Allow merge commits*** (desactivar squash y rebase). Ver el porqué en [metricas.md](metricas.md).
- [ ] Definir jurado (CANACINTRA + negocio) y mentores: **1 mentor por cada 2 equipos**.
- [ ] Reservar sede con mesas de equipo (no auditorio con butacas fijas) y proyector.

## T-72 horas

- [ ] Correo a inscritos: **crear cuenta de GitHub y verificar el correo**, más el link a [guia-github.md](../guia-github.md).
- [ ] Formulario de registro que capture **usuario de GitHub** si se van a medir contribuciones.
- [ ] Confirmar wifi de la sede: cuántos dispositivos simultáneos aguanta y si bloquea github.com.

## El día — mesa de check-in

- [ ] QR impreso con el link del repo, pegado en cada mesa.
- [ ] Proyector con `presentaciones/index.html`. Entrega: `presentaciones/04-git.html`.

## Materiales

| Qué | Cantidad |
|---|---|
| Extensiones y multicontactos | 1 por mesa |
| Post-its y plumones | 1 juego por equipo |
| Cronómetro proyectable para los pitches | 1 |
| Impresión de la estructura del pitch | 1 por equipo |
| Laptops de respaldo | 2–3 |

## Contingencias

| Riesgo | Plan B |
|---|---|
| Wifi caído o saturado | Hotspots; canvas en papel o doc y se sube cuando vuelva la red. |
| Alguien no logra crear cuenta | Trabaja en el fork de su equipo como colaborador. |
| Un equipo se queda sin idea | Banco de 5 retos precocinados, uno por vertical. |
| Equipo desbalanceado (nadie técnico) | El entregable es el Lean Canvas. No hace falta demo ni código. |
| Se acaba el tiempo antes de los PRs | Recortar preguntas del pitch antes que sacrificar la subida del canvas. |

## Después del evento (T+3 días)

- [ ] Correr `scripts/metricas.sh` y generar el reporte para CANACINTRA.
- [ ] Mergear los PRs pendientes (con merge commit).
- [ ] Completar la tabla de ideas en el `README.md`.
