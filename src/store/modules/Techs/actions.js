export function addTechOnState(techName) {
  return {
    type: '@tech/SIGN_IN_REQUEST',
    payload: { techName },
  };
}
