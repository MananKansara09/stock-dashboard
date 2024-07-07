export async function GiveSearchParams(url:URL) {
    const queryParams: any = new URLSearchParams(url.search);
    const queryData: any = {};
    for (const [key, value] of queryParams.entries()) {
      queryData[key] = value;
    }
    return queryData;
}