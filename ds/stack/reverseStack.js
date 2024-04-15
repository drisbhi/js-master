function insertAtBottom(st, el) {
    let temp = [];
    if (st.length === 0) return st;
    while (st.length !== 0) {
      temp.push(st[st.length - 1]);
      st.pop();
    }
    st.push(el);
    while (temp.length !== 0) {
      st.push(temp[temp.length - 1]);
      temp.pop();
    }
    return st;
  }
  
  function reverse(st) {
    if (st.length <= 1) return st; // Base case: if stack has 1 or fewer elements, return stack
    let el = st[st.length - 1];
    st.pop();
    reverse(st);
    insertAtBottom(st, el);
  }
  
  let st = [2, 4, 5, 7];
  reverse(st);
  console.log(st);
  