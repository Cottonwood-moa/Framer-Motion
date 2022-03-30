interface IOption {
  [key: string]: string;
}
class ReadMd {
  async readGithubMd(branch: string) {
    const requestOptions: IOption = {
      method: "GET",
      redirect: "follow",
    };

    const res = fetch(
      `https://raw.githubusercontent.com/Cottonwood-moa/Framer-Motion/${branch}/code.md`,
      requestOptions
    )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
    return res;
  }
}
export default ReadMd;
