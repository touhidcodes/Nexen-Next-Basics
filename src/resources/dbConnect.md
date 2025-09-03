# MongoDB + Next.js + TypeScript

This guide shows how to connect **MongoDB** to a **Next.js project** with **TypeScript** using the official MongoDB driver.

---

## Install Dependencies

```bash
npm install mongodb
npm install --save-dev @types/mongodb
```

## Setup MongoDB Connection Helper

#### 1. Create a file: `lib/mongodb.ts`

```bash
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = {};

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
```

#### 2. Add MongoDB URI in `.env`

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myDatabase

```
