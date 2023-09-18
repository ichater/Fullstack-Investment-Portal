import {
  AdviserDataParsed,
  ClientDataParsed,
  AccountDataParsed,
  AccountIncomingData,
  ClientIncomingData,
  AdviserIncomingData,
} from "@/types";

export const accountDataParser = ({
  id,
  totalValue,
  cashAccount,
  cashInInvestments,
  adviserFee,
  adviserFeeType,
  cashInShares,
  shares,
  managedInvestments,
  name,
  slug,
  investmentStrategy,
}: AccountIncomingData): AccountDataParsed => {
  return {
    id,
    totalValue,
    cashAccount,
    cashInInvestments,
    adviserFee,
    adviserFeeType,
    cashInShares,
    shares,
    managedInvestments,
    name,
    slug,
    investmentStrategy,
  };
};

export const clientDataParser = ({
  id,
  firstName,
  lastName,
  slug,
  email,
  profileImage,
  bio,
  access,
  role,
  accounts,
}: ClientIncomingData): ClientDataParsed => {
  const parsedAccounts: AccountDataParsed[] = accounts.length
    ? accounts.map((acc) => accountDataParser(acc))
    : [];

  return {
    id,
    firstName,
    lastName,
    slug,
    email,
    profileImage,
    bio,
    access,
    role,
    accounts: parsedAccounts,
  };
};

export const adviserDataParser = (
  data: AdviserIncomingData
): AdviserDataParsed => {
  const clients = data.clients
    ? data.clients.map((client) => clientDataParser(client))
    : [];

  return {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    slug: data.slug,
    bio: data.bio,
    email: data.email,
    profileImage: data.profileImage,
    city: data.city,
    phone: data.phone,
    company: data.company,
    clients,
  };
};
