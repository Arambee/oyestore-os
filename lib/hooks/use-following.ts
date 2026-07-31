"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "oyestore:following";

type Listener = () => void;
const listeners = new Set<Listener>();
const EMPTY_IDS: string[] = [];
let cachedIds: string[] | null = null;

function readStoredFollowing(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function getSnapshot(): string[] {
  if (cachedIds === null) {
    cachedIds = readStoredFollowing();
  }
  return cachedIds;
}

function getServerSnapshot(): string[] {
  return EMPTY_IDS;
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function commitFollowing(next: string[]) {
  cachedIds = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  listeners.forEach((listener) => listener());
}

/**
 * Who the current visitor follows, persisted to localStorage since this
 * prototype has no real accounts/backend. Backed by useSyncExternalStore so
 * every FollowButton instance stays in sync and hydration never mismatches
 * (the server always sees an empty list; the client reads the real one).
 */
export function useFollowing() {
  const followedIds = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleFollow = (authorId: string) => {
    const current = getSnapshot();
    const next = current.includes(authorId)
      ? current.filter((id) => id !== authorId)
      : [...current, authorId];
    commitFollowing(next);
  };

  const isFollowing = (authorId: string) => followedIds.includes(authorId);

  return { followedIds, isFollowing, toggleFollow };
}
