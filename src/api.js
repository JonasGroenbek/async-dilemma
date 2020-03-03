let queue = [];
let blocked = false;

export default async function callApi(shouldRefresh = false) {
  return new Promise((resolve, reject) => {
    if (blocked) {
      queue.push(apiCall());
    } else {
      if (shouldRefresh && !blocked) {
        blocked = true;
        apiCall().then(e => {
          console.log("resolved refresh call");
          for (let i = 0; i < queue.length; i++) {
            /*
              this part is the dilemma. Since we cannot resolve values for individual contexts.
              And the respective queued counts cannot be incremented properly
            */
            queue[i].then(e => console.log("ran queue call"));
          }
          queue = [];
          blocked = false;
        });
      } else {
        resolve(apiCall());
      }
    }
  });
}

const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("made single call!"), 1000);
  });
};
