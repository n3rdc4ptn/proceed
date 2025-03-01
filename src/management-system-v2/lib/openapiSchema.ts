/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
  ? OneOf<[XOR<A, B>, ...Rest]>
  : never;

export interface paths {
  '/process': {
    /** @description Get all processes you can view. */
    get: operations['getProcess'];
    /** @description Post a process. */
    post: operations['postProcess'];
  };
  '/process/{definitionId}': {
    /** @description Get a porcess by it's id. */
    get: operations['getProcessById'];
    /** @description Updates a **partial** set of properties (this means, that arbitrarily many properties can be left out). */
    put: operations['updateProcessById'];
    /** @description Delete a process. */
    delete: operations['deleteProcessById'];
  };
  '/process/{definitionId}/versions': {
    /** @description Get all the versions of a process. */
    get: operations['getProcessVersionsById'];
    /** @description Post a new version of a process. */
    post: operations['postProcessVersionById'];
  };
  '/process/{definitionId}/versions/{version}': {
    /** @description Get a specific version of a process. */
    get: operations['getVersionById'];
  };
  '/process/{definitionId}/images': {
    /** @description Get all images used in a process. */
    get: operations['getImageOfProcessById'];
  };
  '/process/{definitionId}/images/{imageFileName}': {
    /** @description Get a specific image og a process. */
    get: operations['getImagesByProcessId'];
  };
  '/process/{definitionId}/user-tasks': {
    /** @description Get all user tasks used in a process. */
    get: operations['getUserTasksByProcessId'];
  };
  '/process/{definitionId}/user-tasks/{userTaskFileName}': {
    /** @description Get a specific user task of a process. */
    get: operations['getUserTaskByFilename'];
    /**
     * @description Update a specific user task of a process.
     * If userTaskFileName exists, then it is updated with the body of the request (200 response), if not, then the user task is created (201 response).
     */
    put: operations['updateUserTaskByFilename'];
    /** @description Delete a specific user task of a process. */
    delete: operations['deleteUserTaskByFilename'];
  };
  '/machines': {
    /** @description Get stored machines. */
    get: operations['getMachines'];
    /**
     * @description Store a machine.
     *
     * One of the following criteria has to be met in order for the machine to be posted:
     * - machine.ip and machine.port have to be set
     * - machine.hostname has to be set
     * - machine.id has to be set
     */
    post: operations['postMachine'];
  };
  '/machines/{id}': {
    /** @description Get a stored machine by it's id. */
    get: operations['getMachineById'];
    /** @description Update a machine by it's id. */
    put: operations['updateMachineById'];
    /** @description Delete a machine by it's id. */
    delete: operations['deleteMachineById'];
    parameters: {
      path: {
        /** @description Id of a machine */
        id: string;
      };
    };
  };
  '/users': {
    /** @description Get all users. */
    get: operations['getUsers'];
    /** @description Create a user. */
    post: operations['postUser'];
  };
  '/users/{id}': {
    /** @description Get a specific user. */
    get: operations['getUserById'];
    /** @description Update a specific user. */
    put: operations['updateUserById'];
    /** @description Delete a specific user. */
    delete: operations['deleteUserById'];
    parameters: {
      path: {
        /** @description Id of a user */
        id: string;
      };
    };
  };
  '/users/{id}/update-password': {
    /** @description Update the password of a user. */
    put: operations['updateUserPasswordById'];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  '/roles': {
    /** @description Get all roles of the authorization system. */
    get: operations['getRole'];
    /** @description Post a new role. */
    post: operations['postRole'];
  };
  '/roles/{id}': {
    /** @description Get a specific role. */
    get: operations['getRoleById'];
    /** @description Update a specific role. */
    put: operations['updateRoleById'];
    /** @description Delete a specific role. */
    delete: operations['deleteRoleById'];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  '/role-mappings': {
    /** @description Get all role mappings between users and roles. */
    get: operations['getRoleMappings'];
    /** @description Post a new role mapping. */
    post: operations['postRoleMapping'];
  };
  '/role-mappings/users/{userId}': {
    /** @description Get all role mappings referencing a specific user. */
    get: operations['getRoleMappingsByUserId'];
    parameters: {
      path: {
        userId: string;
      };
    };
  };
  '/role-mappings/users/{userId}/{roleId}': {
    /** @description Delete role mapping. */
    delete: operations['deleteRoleMappingByIdByUserId'];
    parameters: {
      path: {
        userId: string;
        roleId: string;
      };
    };
  };
  '/resources': {
    /** @description Get all resources available in the system. */
    get: operations['getResources'];
  };
  '/resources/{id}': {
    /** @description Get a specific resource. */
    get: operations['getResourceById'];
    parameters: {
      path: {
        id: string;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** processBpmnData */
    processBpmnData: {
      /** @description The id as it is in the definitions element of the process */
      definitionId?: string;
      /** @description The name as it is in the definitions element of the process */
      definitionName?: string;
      /** @description The description (the content of documentation element of the first process element in the process model) */
      description?: string;
      /** @description The date and time the process was edited the last time */
      processIds?: string[];
    };
    /** processData */
    processData: {
      description?: string;
      departments?: string[];
      /** @description The variables supposed to be used in the process */
      variables?: {
        name: string;
        /** @enum {unknown} */
        type: 'number' | 'string' | 'boolean' | 'array' | 'object' | '';
      }[];
    };
    /** processServerMetaData */
    processMsMetaData: {
      /** @enum {unknown} */
      type?: 'process';
      /** @description The date and time the process was added in the management-system */
      createdOn?: string;
      /** @description The date and time the process was edited the last time */
      lastEdited?: string;
      /** @description The explicit versions of the process that were created by users */
      versions?: components['schemas']['processVersion'][];
      /** @description Information about the clients that are editing the process, used in the server version for collaborative editing */
      inEditingBy?: {
        /** @description The id of the client editing this process */
        id: string;
        /** @description Id of the task this client is editing */
        task?: string;
      }[];
      /** @description If true, then a share link was created for the process */
      shared?: boolean;
      owner?: string;
    };
    /** @description BPMN XML of the process */
    bpmn: string;
    process: components['schemas']['processBpmnData'] &
      components['schemas']['processMsMetaData'] &
      components['schemas']['processData'] & {
        bpmn?: components['schemas']['bpmn'];
      };
    processResponse: WithRequired<
      components['schemas']['process'],
      | 'definitionId'
      | 'definitionName'
      | 'description'
      | 'departments'
      | 'variables'
      | 'createdOn'
      | 'lastEdited'
      | 'processIds'
      | 'type'
      | 'versions'
    >;
    processVersion: {
      version: number;
      name: string;
      description: string;
    };
    /** image */
    image: {
      /** @enum {unknown} */
      type?: 'Buffer';
      data?: number[];
    };
    machine: {
      id?: string;
      ip?: string;
      port?: number;
      name?: string;
      hostname?: string;
      discovered?: boolean;
      /** @enum {unknown} */
      status?: 'DISCONNECTED' | 'CONNECTED';
      description?: string;
      machine?: {
        currentlyConnectedEnvironments: Record<string, never>[];
        hostname: string;
        name: string;
        description: string;
        id: string;
        online: boolean;
        os: {
          platform: string;
          distro?: string;
          release: string;
        };
        cpu: {
          cores: number;
          physicalCores: number;
          processors: number;
          speed: string;
        };
        mem: {
          total: number;
        };
        disk: {
          type: string;
          total: number;
        }[];
        battery: {
          hasBattery: boolean;
        };
        display: {
          currentResX: string;
          currentResY: string;
        }[];
        network: {
          type: string;
          ip4: string;
          netmaskv4: string;
          netmaskv6: string;
          ip6: string;
          mac: string;
        }[];
        outputs: string[];
        port: number;
        classes: string[];
        domains: string[];
        inputs: string[];
        onlineCheckingAddresses: string[];
        acceptUserTasks: boolean;
        deactivateProcessExecution: boolean;
      };
    };
    machineResponse: WithRequired<
      components['schemas']['machine'],
      | 'id'
      | 'ip'
      | 'port'
      | 'name'
      | 'hostname'
      | 'discovered'
      | 'status'
      | 'description'
      | 'machine'
    >;
    /** user */
    userMetaData: {
      created_at?: string;
      email_verified?: boolean;
      updated_at?: string;
      id?: string;
    };
    /** user */
    userDataPut: {
      /** Format: email */
      email: string;
      username: string;
      firstName: string;
      lastName: string;
    };
    /** user */
    userData: {
      /** Format: email */
      email?: string;
      name?: string;
      /** Format: uri */
      picture?: string;
      username?: string;
      lastName?: string;
      firstName?: string;
    };
    userResponse: WithRequired<
      components['schemas']['userMetaData'] & components['schemas']['userData'],
      | 'created_at'
      | 'email'
      | 'email_verified'
      | 'name'
      | 'picture'
      | 'updated_at'
      | 'username'
      | 'lastName'
      | 'firstName'
      | 'id'
    >;
    /**
     * PermissionNumber
     * @description - example
     * - ezample 2
     */
    PermissionNumber: number;
    /** role */
    roleData: {
      name?: string;
      description?: string;
      note?: string;
      permissions?: {
        Process?: components['schemas']['PermissionNumber'];
        Project?: components['schemas']['PermissionNumber'];
        Template?: components['schemas']['PermissionNumber'];
        Task?: components['schemas']['PermissionNumber'];
        Machine?: components['schemas']['PermissionNumber'];
        Execution?: components['schemas']['PermissionNumber'];
        Role?: components['schemas']['PermissionNumber'];
        User?: components['schemas']['PermissionNumber'];
        Setting?: components['schemas']['PermissionNumber'];
        EnvConfig?: components['schemas']['PermissionNumber'];
        All?: components['schemas']['PermissionNumber'];
      };
      expiration?: string;
      members?: {
        userId: string;
        username: string;
        fisrtName: string;
        lastName: string;
        email: string;
      }[];
      default?: boolean;
    };
    /** role */
    roleMetaData: {
      id?: string;
      createdOn?: string;
      lastEdited?: string;
    };
    /** roleRespnse */
    roleResponse: WithRequired<
      components['schemas']['roleData'] & components['schemas']['roleMetaData'],
      | 'name'
      | 'description'
      | 'note'
      | 'permissions'
      | 'expiration'
      | 'members'
      | 'id'
      | 'default'
      | 'createdOn'
      | 'lastEdited'
    >;
    /** roleMappingData */
    roleMappingData: {
      roleId?: string;
      userId?: string;
    };
    /** roleMappingMetaData */
    roleMappingMetaData: {
      id?: string;
      roleName?: string;
      createdOn?: string;
    };
    /** roleMappingResponse */
    roleMappingResponse: WithRequired<
      components['schemas']['roleMappingData'] & components['schemas']['roleMappingMetaData'],
      'id' | 'roleId' | 'userId' | 'roleName' | 'createdOn'
    >;
    /** resource */
    resource: {
      name: string;
      title: string;
      path: string;
      description: string;
      /** @enum {unknown} */
      type:
        | 'Processes'
        | 'Projects'
        | 'Templates'
        | 'Tasks'
        | 'Machines'
        | 'Executions'
        | 'Roles'
        | 'Users'
        | 'Settings'
        | 'Environment'
        | 'Administrator';
      actions: {
        /** @enum {unknown} */
        name:
          | 'none'
          | 'view'
          | 'update'
          | 'create'
          | 'delete'
          | 'manage'
          | 'share'
          | 'manage-roles'
          | 'manage-groups'
          | 'manage-password'
          | 'admin';
        title: string;
        description: string;
      }[];
      id: string;
    };
    /** shateData */
    shateData: {
      resourceType?: string;
      resourceId?: string;
      sharedWith?: string;
      permissions?: string;
      type?: number | Record<string, never>;
    };
  };
  responses: {
    /** @description Example response */
    '400_Error_Json': {
      headers: {};
      content: {
        'application/json': string;
        'text/html': string;
      };
    };
    /** @description Example response */
    '204_empty_array': {
      content: {
        'application/json': Record<string, never>[];
      };
    };
    /** @description 400 Error. */
    '400_error_message': {
      content: {
        'application/json': {
          error: string;
          ''?: string;
        };
      };
    };
    /** @description 400 Error. */
    '400_error_string_or_message': {
      content: {
        'application/json': OneOf<
          [
            {
              error?: string;
            },
            string,
          ]
        >;
      };
    };
    /** @description 400 Error. */
    '400_error_string': {
      content: {
        'application/json': string;
      };
    };
    /** @description Authentication error. */
    '401_unauthenticated': {
      content: {
        'text/html': string;
      };
    };
    /** @description Request validation failed. */
    '403_validationFailed': {
      content: {
        'application/json': Record<string, never>;
        'text/html': string;
      };
    };
  };
  parameters: {
    /** @description Id of an existing process */
    definitionId: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {
  /** @description Get all processes you can view. */
  getProcess: {
    parameters: {
      query?: {
        /** @description If set to true, no BPM XML is sent back */
        noBpmn?: boolean;
      };
    };
    responses: {
      /** @description Returns a list of processes */
      200: {
        content: {
          'application/json': components['schemas']['processResponse'][];
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description Failed to get processes */
      500: never;
    };
  };
  /** @description Post a process. */
  postProcess: {
    requestBody: {
      content: {
        'application/json': WithRequired<
          components['schemas']['processData'] & {
            bpmn?: components['schemas']['bpmn'];
          },
          'departments' | 'bpmn'
        >;
      };
    };
    responses: {
      /** @description Process created succesfuly */
      201: {
        content: {
          'application/json': components['schemas']['process'];
        };
      };
      /** @description There already exists a process with the given id */
      303: {
        content: {
          'application/json': components['schemas']['process'];
        };
      };
      /** @description The body of the request does not conform to the schma of a process */
      400: never;
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description Failed to create the process due an internal error */
      500: never;
    };
  };
  /** @description Get a porcess by it's id. */
  getProcessById: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': WithRequired<components['schemas']['processResponse'], 'bpmn'>;
        };
      };
      /** @description Error getting the bpmn of the process */
      400: never;
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description No Process with the given definitionId was found */
      404: never;
    };
  };
  /** @description Updates a **partial** set of properties (this means, that arbitrarily many properties can be left out). */
  updateProcessById: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
      };
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description The description (the content of documentation element of the first process element in the process model) */
          description?: string;
          /** @description The name as it is in the definitions element of the process */
          definitionName?: string;
        } & components['schemas']['processData'] & {
            bpmn?: components['schemas']['bpmn'];
          };
      };
    };
    responses: {
      /** @description Process updated succesfuly */
      200: {
        content: {
          'application/json': components['schemas']['process'];
        };
      };
      /** @description Request body doesn't contain a partial set of key:value properties of the Process scheme */
      400: never;
      403: components['responses']['403_validationFailed'];
      /** @description No Process with the given definitionId was found */
      404: never;
    };
  };
  /** @description Delete a process. */
  deleteProcessById: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
      };
    };
    responses: {
      /** @description Process deleted succesfuly */
      200: never;
      403: components['responses']['403_validationFailed'];
      /** @description No Process with the given definitionId was found */
      404: never;
    };
  };
  /** @description Get all the versions of a process. */
  getProcessVersionsById: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
      };
    };
    responses: {
      /** @description Returns versions of a process */
      200: {
        content: {
          'application/json': components['schemas']['processVersion'][];
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description No Process with the given definitionId was found */
      404: never;
    };
  };
  /** @description Post a new version of a process. */
  postProcessVersionById: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
      };
    };
    requestBody?: {
      content: {
        'application/json': {
          /** @description BPMN XML */
          bpmn: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: never;
      /** @description Bad Request */
      400: never;
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get a specific version of a process. */
  getVersionById: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
        /** @description version number */
        version: string;
      };
    };
    responses: {
      /** @description Returns a process */
      200: {
        content: {
          'text/plain': string;
        };
      };
      /** @description {definitionId} or {version} are wrong */
      400: never;
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get all images used in a process. */
  getImageOfProcessById: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'image/png image/svg+xml image/jpeg': string;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get a specific image og a process. */
  getImagesByProcessId: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
        /** @description Filename of the image */
        imageFileName: string;
      };
    };
    requestBody?: {
      content: {
        'application/json': {
          [key: string]: components['schemas']['image'] | undefined;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': {
            ''?: string;
          };
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description Not Found */
      404: never;
    };
  };
  /** @description Get all user tasks used in a process. */
  getUserTasksByProcessId: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': string[];
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get a specific user task of a process. */
  getUserTaskByFilename: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
        /** @description Filename of the user task html file */
        userTaskFileName: string;
      };
    };
    responses: {
      /** @description Plain html of the user task */
      200: {
        content: {
          'text/html': string;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /**
   * @description Update a specific user task of a process.
   * If userTaskFileName exists, then it is updated with the body of the request (200 response), if not, then the user task is created (201 response).
   */
  updateUserTaskByFilename: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
        /** @description Filename of the user task html file */
        userTaskFileName: string;
      };
    };
    /** @description HTML for the userTaskFile in plain text */
    requestBody?: {
      content: {
        'text/plain': string;
        'text/html': string;
      };
    };
    responses: {
      /** @description User task HTML updated */
      200: never;
      /** @description User task HTML created in the server */
      201: never;
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Delete a specific user task of a process. */
  deleteUserTaskByFilename: {
    parameters: {
      path: {
        definitionId: components['parameters']['definitionId'];
        /** @description Filename of the user task html file */
        userTaskFileName: string;
      };
    };
    responses: {
      /** @description The request returns 200 wether the userTaskFile exists or not */
      200: never;
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get stored machines. */
  getMachines: {
    requestBody?: {
      content: {
        'application/json': components['schemas']['machine'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['machineResponse'][];
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /**
   * @description Store a machine.
   *
   * One of the following criteria has to be met in order for the machine to be posted:
   * - machine.ip and machine.port have to be set
   * - machine.hostname has to be set
   * - machine.id has to be set
   */
  postMachine: {
    requestBody?: {
      content: {
        'application/json': components['schemas']['machine'];
      };
    };
    responses: {
      /** @description Created */
      201: never;
      /** @description Bad Request */
      400: {
        content: {
          'text/html': string;
        };
      };
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get a stored machine by it's id. */
  getMachineById: {
    parameters: {
      path: {
        /** @description Id of a machine */
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['machineResponse'];
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description No machine with {id} known */
      404: {
        content: {
          'text/html': string;
        };
      };
    };
  };
  /** @description Update a machine by it's id. */
  updateMachineById: {
    parameters: {
      path: {
        /** @description Id of a machine */
        id: string;
      };
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['machine'];
      };
    };
    responses: {
      /** @description OK */
      200: never;
      /** @description Possible causes: The body of the request is not a JSON object or the machine is not stored and thus can't be changed. */
      400: {
        content: {
          'text/html': string;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description No machine with {id} known! */
      404: {
        content: {
          'text/html': string;
        };
      };
    };
  };
  /** @description Delete a machine by it's id. */
  deleteMachineById: {
    parameters: {
      path: {
        /** @description Id of a machine */
        id: string;
      };
    };
    responses: {
      /** @description OK (This is the response, even if the machine is not known) */
      200: never;
      401: components['responses']['401_unauthenticated'];
      /** @description The machine is known through the discovery and not stored. It can't be removed! */
      403: {
        content: {
          'text/html': string;
        };
      };
    };
  };
  /** @description Get all users. */
  getUsers: {
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['userResponse'][];
        };
      };
      /** @description Bad Request */
      400: never;
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Create a user. */
  postUser: {
    requestBody: {
      content: {
        'application/json': {
          /** Format: email */
          email: string;
          username: string;
          lastName?: string;
          firstName: string;
          password: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: never;
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get a specific user. */
  getUserById: {
    parameters: {
      path: {
        /** @description Id of a user */
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['userResponse'];
        };
      };
      /** @description Bad Request (User probably doesn't exist) */
      400: {
        content: {
          'text/html': string;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Update a specific user. */
  updateUserById: {
    parameters: {
      path: {
        /** @description Id of a user */
        id: string;
      };
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['userDataPut'];
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: {
        content: {
          'text/html': string;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Delete a specific user. */
  deleteUserById: {
    parameters: {
      path: {
        /** @description Id of a user */
        id: string;
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: {
        content: {
          'text/html': string;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Update the password of a user. */
  updateUserPasswordById: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        'application/json': {
          password?: string;
        };
      };
    };
    responses: {
      /** @description Password changed succesfully */
      201: {
        content: {
          'application/json': string;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          'text/html': string;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get all roles of the authorization system. */
  getRole: {
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['roleResponse'];
        };
      };
      /** @description No Content */
      204: {
        content: {
          'application/json': unknown[];
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Post a new role. */
  postRole: {
    requestBody?: {
      content: {
        'application/json': WithRequired<
          components['schemas']['roleData'],
          'name' | 'description' | 'note' | 'permissions' | 'expiration' | 'members' | 'default'
        >;
      };
    };
    responses: {
      /** @description Created */
      201: {
        content: {
          'application/json': components['schemas']['roleResponse'];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          'text/html': string;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get a specific role. */
  getRoleById: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['roleResponse'];
        };
      };
      400: components['responses']['400_error_string_or_message'];
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Update a specific role. */
  updateRoleById: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['roleData'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['roleResponse'];
        };
      };
      400: components['responses']['400_error_string_or_message'];
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description Not Found */
      404: {
        content: {
          'application/json': Record<string, never>;
          'application/xml': {
            error: string;
          };
        };
      };
    };
  };
  /** @description Delete a specific role. */
  deleteRoleById: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      400: components['responses']['400_Error_Json'];
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description Not Found */
      404: {
        content: {
          'application/json': {
            error: string;
          };
        };
      };
    };
  };
  /** @description Get all role mappings between users and roles. */
  getRoleMappings: {
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['roleMappingResponse'];
        };
      };
      204: components['responses']['204_empty_array'];
      400: components['responses']['400_error_message'];
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Post a new role mapping. */
  postRoleMapping: {
    requestBody?: {
      content: {
        'application/json': WithRequired<
          components['schemas']['roleMappingData'],
          'roleId' | 'userId'
        >[];
      };
    };
    responses: {
      /** @description Created */
      201: never;
      400: components['responses']['400_error_message'];
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      404: components['responses']['400_error_message'];
    };
  };
  /** @description Get all role mappings referencing a specific user. */
  getRoleMappingsByUserId: {
    parameters: {
      path: {
        userId: string;
      };
    };
    responses: {
      /** @description All the roles of a user */
      200: {
        content: {
          'application/json': components['schemas']['roleMappingResponse'][];
        };
      };
      204: components['responses']['204_empty_array'];
      400: components['responses']['400_Error_Json'];
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Delete role mapping. */
  deleteRoleMappingByIdByUserId: {
    parameters: {
      path: {
        userId: string;
        roleId: string;
      };
    };
    responses: {
      /** @description Role deleted */
      204: never;
      /** @description Bad Request */
      400: {
        content: {
          'application/json': Record<string, never>;
        };
      };
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      404: components['responses']['400_error_message'];
    };
  };
  /** @description Get all resources available in the system. */
  getResources: {
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['resource'][];
        };
      };
      204: components['responses']['204_empty_array'];
      400: components['responses']['400_Error_Json'];
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
    };
  };
  /** @description Get a specific resource. */
  getResourceById: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['resource'];
        };
      };
      400: components['responses']['400_error_string'];
      401: components['responses']['401_unauthenticated'];
      403: components['responses']['403_validationFailed'];
      /** @description Not Found */
      404: never;
    };
  };
}
