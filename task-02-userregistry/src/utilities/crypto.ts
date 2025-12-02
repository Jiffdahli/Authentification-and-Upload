import bcrypt from 'bcrypt';
import {ICrypto } from './types'

/**
 * Hashen des zu prüfenden Passworts.
 * @param data - Das Passwort, das gehasht werden soll.
 * @returns Das gehashte Passwort.
 */

export async function hashPwdFromUser(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}


/**
 * Passwort Entschlüsseln (Encryption) und Vergleichen mit dem gespeicherten Hashwert.
 * @param data - Das Passwort, das überprüft werden soll.
 * @param hashedPassword - Der gespeicherte Hashwert des Passworts.
 * @returns true, wenn das Passwort übereinstimmt, sonst false.
 */

export async function comparePwdWithHash(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}

// Der Code zum Generieren des Hash-Wertes muss außerhalb der Funktion stehen.
/*(async() => {
    const passwordToHash = "Ji&my g1ng zum R3genb0gen und 4l5 3r wie6erkam tra7 er 0cto B3erdeba! )er ge$§de aus dem Wal` kam un# Beeren samxelte";
    const hash = await hashPwdFromUser(passwordToHash);
    console.log("Gehashtes Passwort ===>");
    console.log(hash);
})();