/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IStableDebtTokenInterface extends Interface {
  functions: {
    burn: TypedFunctionDescription<{
      encode([_user, _amount]: [string, BigNumberish]): string;
    }>;

    getAverageStableRate: TypedFunctionDescription<{ encode([]: []): string }>;

    getUserLastUpdated: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    getUserStableRate: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    mint: TypedFunctionDescription<{
      encode([_user, _amount, _rate]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;
  };

  events: {};
}

export class IStableDebtToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IStableDebtToken;
  attach(addressOrName: string): IStableDebtToken;
  deployed(): Promise<IStableDebtToken>;

  on(event: EventFilter | string, listener: Listener): IStableDebtToken;
  once(event: EventFilter | string, listener: Listener): IStableDebtToken;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IStableDebtToken;
  removeAllListeners(eventName: EventFilter | string): IStableDebtToken;
  removeListener(eventName: any, listener: Listener): IStableDebtToken;

  interface: IStableDebtTokenInterface;

  functions: {
    burn(
      _user: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getAverageStableRate(): Promise<BigNumber>;

    getUserLastUpdated(_user: string): Promise<number>;

    getUserStableRate(_user: string): Promise<BigNumber>;

    mint(
      _user: string,
      _amount: BigNumberish,
      _rate: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  burn(
    _user: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getAverageStableRate(): Promise<BigNumber>;

  getUserLastUpdated(_user: string): Promise<number>;

  getUserStableRate(_user: string): Promise<BigNumber>;

  mint(
    _user: string,
    _amount: BigNumberish,
    _rate: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    burn(_user: string, _amount: BigNumberish): Promise<BigNumber>;

    getAverageStableRate(): Promise<BigNumber>;

    getUserLastUpdated(_user: string): Promise<BigNumber>;

    getUserStableRate(_user: string): Promise<BigNumber>;

    mint(
      _user: string,
      _amount: BigNumberish,
      _rate: BigNumberish
    ): Promise<BigNumber>;
  };
}