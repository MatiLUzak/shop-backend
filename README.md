# NodeJS-Shop-Backend

## 📌 Opis projektu

**NodeJS-Shop-Backend** to aplikacja serwerowa napisana w języku **JavaScript** z wykorzystaniem środowiska **Node.js** oraz frameworka **Express.js**. Projekt ten stanowi backend dla aplikacji e-commerce, obsługując takie funkcje jak zarządzanie użytkownikami, produktami, zamówieniami oraz integrację z bazą danych.

## 🛠 Wymagania

Aby uruchomić projekt, potrzebujesz:

- **Node.js** w wersji 14.x lub nowszej
- **npm** (menedżer pakietów Node.js)
- **Baza danych** (np. MySQL, PostgreSQL) skonfigurowana zgodnie z ustawieniami w pliku `.env`

## 🚀 Instalacja i uruchomienie

1. **Klonowanie repozytorium:**

   ```bash
   git clone https://github.com/MatiLUzak/shop-backend.git
   cd shop-backend
   ```

2. **Instalacja zależności:**

   ```bash
   npm install
   ```

3. **Konfiguracja środowiska:**

   - Utwórz plik `.env` w katalogu głównym projektu na podstawie pliku `.env.example`.
   - Uzupełnij plik `.env` odpowiednimi wartościami, takimi jak dane dostępu do bazy danych, klucze API itp.

4. **Inicjalizacja bazy danych:**

   - Upewnij się, że baza danych jest uruchomiona i dostępna.
   - Uruchom migracje bazy danych za pomocą narzędzia **Knex**:

     ```bash
     npx knex migrate:latest
     ```

5. **Uruchomienie aplikacji:**

   ```bash
   npm start
   ```

   Aplikacja będzie dostępna pod adresem `http://localhost:3000` (lub innym, jeśli został zmieniony w pliku `.env`).

## 📂 Struktura projektu

```
shop-backend/
├── .idea/
├── middleware/
│   └── [pliki pośredniczące]
├── models/
│   └── [modele bazy danych]
├── node_modules/
├── routes/
│   └── [definicje tras]
├── uploads/
│   └── [przechowywane pliki przesłane przez użytkowników]
├── .env
├── .gitignore
├── README.md
├── clear.sql
├── db.js
├── docker-compose.yml
├── index.js
├── init.sql
├── knexfile.js
├── package-lock.json
├── package.json
└── test-db.js
```

- **`.idea/`** – katalog konfiguracyjny środowiska IDE.
- **`middleware/`** – zawiera pliki pośredniczące (middleware) używane w aplikacji.
- **`models/`** – zawiera definicje modeli bazy danych.
- **`routes/`** – zawiera definicje tras aplikacji.
- **`uploads/`** – przechowuje pliki przesłane przez użytkowników.
- **`.env`** – plik konfiguracyjny środowiska.
- **`db.js`** – pliki związane z konfiguracją bazy danych.
- **`docker-compose.yml`** – plik konfiguracyjny dla Docker Compose.
- **`index.js`** – główny plik uruchamiający aplikację.
- **`knexfile.js`** – plik konfiguracyjny dla Knex.js.
- **`package.json`** – zawiera informacje o projekcie i zależnościach.

## ✍️ Autor

- **MatiLUzak** – [Profil GitHub](https://github.com/MatiLUzak)

## 📜 Licencja

Ten projekt jest licencjonowany na podstawie licencji MIT. Szczegóły znajdują się w pliku `LICENSE`.
