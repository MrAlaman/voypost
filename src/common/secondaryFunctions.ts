const getAvatarFirstLetters = (
  displayName: string | undefined | null,
): string => {
  return displayName
    ? `${displayName?.trim().split(' ')[0][0]}${
        displayName?.trim().split(' ')[1][0]
      }`
    : 'U';
};
export default getAvatarFirstLetters;
