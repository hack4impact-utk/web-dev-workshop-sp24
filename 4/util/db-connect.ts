import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/test';

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Create and cache a MongoDB connection using mongoose
 * @returns {Promise<mongoose.Mongoose>}
 */
async function dbConnect(): Promise<mongoose.Mongoose> {
  // return cached connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // open new connection if we are not currently waiting on a promise
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    // set the promise so that other requests can wait on it
    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    // wait for promise to resolve
    cached.conn = await cached.promise;
  } catch (e) {
    // set promise to null so next attempt to connect will retry
    cached.promise = null;
    throw e;
  }

  // return connection
  return cached.conn;
}

export default dbConnect;