import {
  AdviserDataParsed,
  ClientDataParsed,
  AccountDataParsed,
  AccountIncomingData,
  ClientIncomingData,
  AdviserIncomingDataFull,
  ShareInAccountParsed,
  ShareIncomingData,
  InvestmentIncomingData,
  ManagedInvestmentInAccountParsed,
} from "@/types";

export const shareInAccountParser = (
  share: ShareIncomingData
): ShareInAccountParsed => {
  const { id, asxCode, name, category } = share.share;

  return {
    id,
    asxCode,
    name,
    category,
    value: share.value,
  };
};

export const investmentInAccountParser = (
  investment: InvestmentIncomingData
): ManagedInvestmentInAccountParsed => {
  const { id, name, apir, nabOwned, mer, category } =
    investment.managedInvestment;
  return { id, name, apir, nabOwned, mer, category, value: investment.value };
};

export const fundSmaDivider = (
  investments: InvestmentIncomingData[]
): {
  managedFunds: ManagedInvestmentInAccountParsed[];
  sma: ManagedInvestmentInAccountParsed[];
} => {
  const parsedInvestments: ManagedInvestmentInAccountParsed[] = investments.map(
    (investment) => investmentInAccountParser(investment)
  );

  return {
    managedFunds: parsedInvestments.filter(
      (investment) => investment.category === "FUND"
    ),
    sma: parsedInvestments.filter(
      (investment) => investment.category === "SMA"
    ),
  };
};

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
  const parsedShares = shares.map((share) => shareInAccountParser(share));
  const { managedFunds, sma } = fundSmaDivider(managedInvestments);

  return {
    id,
    totalValue,
    cashAccount,
    cashInInvestments,
    adviserFee,
    adviserFeeType,
    cashInShares,
    shares: parsedShares,
    managedFunds,
    sma,
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
  data: AdviserIncomingDataFull
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
