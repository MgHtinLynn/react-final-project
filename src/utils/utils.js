export function getDefaultRoute(user) {
  if (!user) return '/authChoose'
  return 'dashboard'
}

export function isVoted(option, user) {
  return option?.votes.includes(user)
}
