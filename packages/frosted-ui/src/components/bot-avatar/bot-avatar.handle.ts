interface BotAvatarHandleCallbacks {
  blink: () => void;
  lookAt: (gaze: { x: number; y: number } | null) => void;
}

/**
 * Controls a BotAvatar imperatively. Create one with `createBotAvatarHandle()`
 * and pass it to the `handle` prop.
 *
 * The imperative methods take effect only while an avatar using this handle
 * is mounted; calls made before one attaches (or after it unmounts) are
 * ignored. Several avatars may share one handle — all of them react.
 */
interface BotAvatarHandle {
  /**
   * Triggers a single blink — a "message received" or acknowledgement beat.
   *
   * This method should only be called in an event handler or an effect (not
   * during rendering).
   */
  blink(): void;
  /**
   * Points the gaze at a normalized direction ([-1, 1] per axis), or releases
   * it with `null` so the idle wander resumes. A declarative `gaze` prop on
   * the avatar takes precedence while set.
   *
   * This method should only be called in an event handler or an effect (not
   * during rendering).
   */
  lookAt(gaze: { x: number; y: number } | null): void;
}

const handleRegistries = new WeakMap<BotAvatarHandle, Set<BotAvatarHandleCallbacks>>();

/** Creates a new handle to control BotAvatar components imperatively. */
function createBotAvatarHandle(): BotAvatarHandle {
  const subscribers = new Set<BotAvatarHandleCallbacks>();
  const handle: BotAvatarHandle = {
    blink: () => subscribers.forEach((subscriber) => subscriber.blink()),
    lookAt: (gaze) => subscribers.forEach((subscriber) => subscriber.lookAt(gaze)),
  };
  handleRegistries.set(handle, subscribers);
  return handle;
}

/** @internal Attaches a mounted avatar to a handle; returns the detach. */
function registerBotAvatarHandle(handle: BotAvatarHandle, callbacks: BotAvatarHandleCallbacks): () => void {
  const subscribers = handleRegistries.get(handle);
  // Not created by createBotAvatarHandle — nothing to attach to.
  if (!subscribers) return () => undefined;
  subscribers.add(callbacks);
  return () => {
    subscribers.delete(callbacks);
  };
}

export { createBotAvatarHandle, registerBotAvatarHandle };
export type { BotAvatarHandle };
