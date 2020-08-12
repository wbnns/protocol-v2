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

interface MockAggregatorUsdInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class MockAggregatorUsd extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockAggregatorUsd;
  attach(addressOrName: string): MockAggregatorUsd;
  deployed(): Promise<MockAggregatorUsd>;

  on(event: EventFilter | string, listener: Listener): MockAggregatorUsd;
  once(event: EventFilter | string, listener: Listener): MockAggregatorUsd;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MockAggregatorUsd;
  removeAllListeners(eventName: EventFilter | string): MockAggregatorUsd;
  removeListener(eventName: any, listener: Listener): MockAggregatorUsd;

  interface: MockAggregatorUsdInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;
  };

  estimate: {
    latestAnswer(): Promise<BigNumber>;
  };
}