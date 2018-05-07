export function selectDept(dept) {
  return {
    type: "DEPT_SELECTED",
    payload: dept
  };
}
