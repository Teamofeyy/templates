# Patch Templates (Tutorial)

`templates/patches/` используется генератором как источник патчей **после** того, как базовый шаблон уже скопирован из `templates/<framework>` в рабочую директорию.

## Что исполняется сейчас (MVP)

1) `templates/patches/bundles/<bundle-key>/edits.json`

   Генератор выбирает bundle по `framework + routing + styling` и применяет патчи к файлам проекта.

2) `templates/patches/tailwind/.env.example.tpl`

   Копируется в проект как `.env.example`, если выбран Tailwind.

## Что пока НЕ исполняется автоматически

- `templates/patches/examples/*` — это справочные сниппеты из документаций (их код сейчас не парсит как “готовые патчи”).

## Bundle naming (ключ выбора и fallback)

Генератор строит список кандидатов:

1) `${frameworkKey}-${routingKey}-${stylingKey}`
2) `${frameworkKey}-${routingKey}`
3) `${frameworkKey}-${stylingKey}`
4) `${frameworkKey}`
5) `default`

Применение идёт **слоями**:

- сначала `default`
- затем более специфичные bundles
- самым последним — наиболее специфичный

Это позволяет иметь общий базовый патч и дополнять/переопределять его для частных комбинаций.

### Сопоставление ключей из `ProjectConfig`

- `frameworkKey`
  - `React` -> `react-ts`
  - `Vue` -> `vue-ts`
  - `Nextjs` -> `nextjs`
  - остальные -> `framework.as_str()`
- `routingKey`
  - `react-router`
  - `react-router-data`
  - `vue-router`
  - `app-router`
  - `pages-router`
  - `none`
- `stylingKey`
  - `tailwind`
  - `css-modules`
  - `styled-components`

### Примеры

- `react-ts-react-router-tailwind`
- `react-ts-tailwind`
- `vue-ts-vue-router`
- `vue-ts-tailwind`
- `nextjs-app-router-tailwind`
- `nextjs-pages-router`
- `nextjs-pages-router-tailwind`
- `default`

## Формат `edits.json`

Путь: `templates/patches/bundles/<bundle-key>/edits.json`

Пример:

```json
{
  "edits": [
    {
      "mode": "insertAfter",
      "target": "README.md",
      "template": "snippets/insert-note.md",
      "anchor": "Currently, two official plugins are available:"
    },
    {
      "mode": "replace",
      "target": "package.json",
      "template": "package.json"
    }
  ]
}
```

### Поля edit

- `mode`
  - `replace` — заменить весь `target` содержимым `template`
  - `append` — дописать `template` в конец `target`
  - `insertAfter` — вставить `template` после первого вхождения `anchor` в `target`
  - `insertBefore` — вставить `template` перед первым вхождением `anchor` в `target`
  - `delete` — удалить файл или папку `target`; `template` не нужен
- `target` — путь относительно корня проекта
- `template` — путь относительно папки bundle; не используется для `delete`
- `anchor` — нужен для `insertAfter/insertBefore`
- `skip_if_missing_target` (опционально) — если `true` и `target` отсутствует, edit пропускается
- `only_if_features` (опционально) — apply только если **все** перечисленные Feature выбраны
- `unless_features` (опционально) — пропустить edit, если выбрана **хотя бы одна** Feature из списка
- `only_if_frameworks` (опционально) — apply только для указанных framework
- `only_if_routing` (опционально) — apply только для указанных routing
- `only_if_styling` (опционально) — apply только для указанных styling

## Подстановки в `template`

Сейчас поддерживается только:
- `{{project_name}}`

## Пример rules в `edits.json`

```json
{
  "edits": [
    {
      "mode": "insertAfter",
      "target": "README.md",
      "template": "snippets/insert-note.md",
      "anchor": "# React + TypeScript + Vite",
      "only_if_features": ["tailwind", "react-router"],
      "unless_features": ["biome"],
      "only_if_frameworks": ["react"],
      "only_if_routing": ["react-router"],
      "only_if_styling": ["tailwind"]
    }
  ]
}
```

## Как сделать “разные шаблоны для Next.js App Router / Pages Router”

Создай bundles:
- `templates/patches/bundles/nextjs-app-router-tailwind/edits.json`
- `templates/patches/bundles/nextjs-pages-router-tailwind/edits.json`

И в каждом описывай нужные правки (например в `eslint.config.js`, `app/layout.tsx`, `app/page.tsx`, и т.д.).

## Пример “как я могу тебя научить”

Смотри готовые демо-bundles:
- `templates/patches/bundles/react-ts-react-router-tailwind/`
- `templates/patches/bundles/react-ts-tailwind/`
- `templates/patches/bundles/vue-ts-vue-router/`
- `templates/patches/bundles/vue-ts-tailwind/`
- `templates/patches/bundles/nextjs-pages-router/`
- `templates/patches/bundles/nextjs-app-router-tailwind/`
- `templates/patches/bundles/nextjs-pages-router-tailwind/`
