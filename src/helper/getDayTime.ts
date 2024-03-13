const getDayTime = (createdAt: number[]) => {
  const date = `${createdAt[0]}.${createdAt[1].toString().padEnd(2)}.${createdAt[2].toString().padEnd(2)}`;
  const time = `${createdAt[3]}:${createdAt[4].toString().padEnd(2)}:${createdAt[5].toString().padEnd(2)}`;
  return `${date} ${time}`;
};

export default getDayTime;
