export const textTrimming = (text: string, limit: number) =>{
    if (text.length > limit) text = text.substring(0, limit) + "...";
    return text;
  }
