const KEY = 'intro-played'

/**
 * Whether the "Doğukan Baybut" preloader already played in this browser tab. Read once at load, so
 * coming back to the home page (e.g. from the blog) skips the intro. A new tab or visit plays it again.
 */
export const introAlreadyPlayed = (() => {
  try {
    return window.sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
})()

export function markIntroPlayed() {
  try {
    window.sessionStorage.setItem(KEY, '1')
  } catch {
    // Storage unavailable (private mode etc.): the intro simply plays again next time.
  }
}
