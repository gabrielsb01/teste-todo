import type { ITask, TETaskProps } from '@/entities/task'

import { TCTaskStatus } from '@/enums/task'

import { createId } from '@paralleldrive/cuid2'
import { BehaviorSubject } from 'rxjs'

export class Task implements ITask {
  private readonly _props: TETaskProps
  private readonly _title$: BehaviorSubject<string>
  private readonly _status$: BehaviorSubject<TCTaskStatus>
  private readonly _description$: BehaviorSubject<string | undefined>
  private readonly _updated$: BehaviorSubject<this>

  protected constructor(props: TETaskProps) {
    this._props = props
    this._title$ = new BehaviorSubject<string>(props.title)
    this._status$ = new BehaviorSubject<TCTaskStatus>(props.status)
    this._description$ = new BehaviorSubject<string | undefined>(
      props.description,
    )

    this._updated$ = new BehaviorSubject<this>(this)
  }

  static create(props: Partial<TETaskProps>) {
    const task = new Task({
      id: props.id ?? createId(),
      status: props.status ?? 'pending',
      title: props.title ?? 'Nova task',
      description: props.description,
    })

    return task
  }

  public get id() {
    return this._props.id
  }

  public get title() {
    return this._props.title
  }

  public get status() {
    return this._props.status
  }

  public get description() {
    return this._props.description
  }

  public set title(title) {
    this._props.title = title
    this._title$.next(title)
    this._updated$.next(this)
  }

  public set status(status) {
    this._props.status = status
    this._status$.next(status)
    this._updated$.next(this)
  }

  public set description(description) {
    this._props.description = description
    this._description$.next(description)
    this._updated$.next(this)
  }

  public get title$() {
    return this._title$
  }

  public get status$() {
    return this._status$
  }

  public get description$() {
    return this._description$
  }

  public get updated$() {
    return this._updated$
  }
}
