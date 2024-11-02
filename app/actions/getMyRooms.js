"use server";

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import { redirect } from "next/navigation";

async function getMyRooms() {
  const sessionCookies = cookies().get("appwrite-session");
  if (!sessionCookies) {
    redirect("/login");
  }

  try {
    const { account, databases } = await createSessionClient(
      sessionCookies.value
    );

    // Get user's ID
    const user = await account.get();
    const userId = user.$id;

    // Fetch user's rooms
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal("user_id", userId)]
    );

    return rooms;
  } catch (error) {
    console.log("Failed to get user's rooms", error);
    redirect("/error");
  }
}

export default getMyRooms;
